#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::{fs::File, io::Read};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_tasks() -> Vec<String>{
    let mut output = Vec::new();
    let input_path = "text.txt";
    let mut file = match File::open(input_path) {
        Err(why) => panic!("couldn't open {}: {}", input_path, why),
        Ok(file) => file,
    };
    let mut s = String::new();
    match file.read_to_string(&mut s) {
        Err(why) => panic!("couldn't read: {}", why),
        Ok(_) => {}
    }
    for text in s.split(" , "){
        output.push(text.to_string());
    };
    return output
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_tasks])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

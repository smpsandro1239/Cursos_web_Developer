
import os
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    base_path = f"file://{os.getcwd()}/curso-css"
    lessons = [
        "aula-1-introducao.html",
        "aula-2-seletores.html",
        "aula-3-box-model.html",
        "aula-4-flexbox.html"
    ]

    for i, lesson in enumerate(lessons):
        page.goto(f"{base_path}/{lesson}")
        page.screenshot(path=f"jules-scratch/verification/aula_{i+1}.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)

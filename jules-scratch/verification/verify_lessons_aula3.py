from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the main page
    page.goto("http://localhost:8000")
    page.screenshot(path="jules-scratch/verification/01-main-page-updated-aula3.png")

    # Navigate to the new HTML lesson
    page.goto("http://localhost:8000/curso-html5/aula-3-listas-tabelas.html")
    page.screenshot(path="jules-scratch/verification/02-html-lesson-3.png")

    # Navigate to the new CSS lesson
    page.goto("http://localhost:8000/curso-css/aula-3-box-model.html")
    page.screenshot(path="jules-scratch/verification/03-css-lesson-3.png")

    # Navigate to the new JS lesson
    page.goto("http://localhost:8000/curso-js/aula-3-operadores-estruturas-controlo.html")
    page.screenshot(path="jules-scratch/verification/04-js-lesson-3.png")

    # Navigate to the new Angular lesson
    page.goto("http://localhost:8000/curso-angular/aula-3-data-binding-interpolacao.html")
    page.screenshot(path="jules-scratch/verification/05-angular-lesson-3.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)

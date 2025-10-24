from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the main page
    page.goto("http://localhost:8000")
    page.screenshot(path="jules-scratch/verification/01-main-page-updated-aula4.png")

    # Navigate to the new HTML lesson
    page.goto("http://localhost:8000/curso-html5/aula-4-formularios.html")
    page.screenshot(path="jules-scratch/verification/02-html-lesson-4.png")

    # Navigate to the new CSS lesson
    page.goto("http://localhost:8000/curso-css/aula-4-flexbox.html")
    page.screenshot(path="jules-scratch/verification/03-css-lesson-4.png")

    # Navigate to the new JS lesson
    page.goto("http://localhost:8000/curso-js/aula-4-funcoes-escopo.html")
    page.screenshot(path="jules-scratch/verification/04-js-lesson-4.png")

    # Navigate to the new Angular lesson
    page.goto("http://localhost:8000/curso-angular/aula-4-event-binding.html")
    page.screenshot(path="jules-scratch/verification/05-angular-lesson-4.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)

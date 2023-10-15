describe('Автотесты на форму логина', function () {
        // задание 1
        it('Позитивный кейс авторизацииВерный: логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#mail').type('german@dolnikov.ru'); //ищу инпут воода имейл и ввожу логин
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#pass').type('iLoveqastudio1'); // ищу инпут пароля и ввожу пароль
            cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
            cy.get('#loginButton').click(); // клик по кнопке Войти
            cy.contains('Авторизация прошла успешно').should('be.visible'); // наличие уведомления
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика

         })   

          // задание 2
        it('Проверка логики востановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#forgotEmailButton').click();// нажать кнопку Забыли пароль?
            cy.get('#mailForgot').type('ivanov@yandex.ru'); //ищу инпут воода имейл и ввожу логин
            cy.get('#restoreEmailButton').click();// нажать кнопку Отправить код
            cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); // наличие уведомления
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика

         })   

        // задание 3
         it('Негативный кейс авторизации: Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#mail').type('german@dolnikov.ru'); //ищу инпут воода имейл и ввожу логин
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#pass').type('iLoveqastudio1111111'); // ищу инпут пароля и ввожу пароль
            cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
            cy.get('#loginButton').click(); // клик по кнопке Войти
            cy.contains('Такого логина или пароля нет').should('be.visible'); // наличие уведомления
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика

         })   
         // задание 4
         it('Негативный кейс авторизации: НЕверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#mail').type('qagerman@dolnikov.ru'); //ищу инпут воода имейл и ввожу логин
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#pass').type('iLoveqastudio1'); // ищу инпут пароля и ввожу пароль
            cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
            cy.get('#loginButton').click(); // клик по кнопке Войти
            cy.contains('Такого логина или пароля нет').should('be.visible'); // наличие уведомления 
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика
        }) 
        // задание 5
        it('Негативный кейс валидации: Логин без @ и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#mail').type('germandolnikov.ru'); //ищу инпут воода имейл и ввожу логин
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#pass').type('iLoveqastudio1'); // ищу инпут пароля и ввожу пароль
            cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
            cy.get('#loginButton').click(); // клик по кнопке Войти
            cy.contains('Нужно исправить проблему валидации').should('be.visible'); // наличие уведомления 
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика
        }) 

         // задание 6
         it('Проверку на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#mail').type('GerMan@Dolnikov.ru'); //ищу инпут воода имейл и ввожу логин
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизеблена
            cy.get('#pass').type('iLoveqastudio1'); // ищу инпут пароля и ввожу пароль
            cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
            cy.get('#loginButton').click(); // клик по кнопке Войти
            cy.contains('Авторизация прошла успешно').should('be.visible'); // наличие уведомления
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие крестика

         })   


})





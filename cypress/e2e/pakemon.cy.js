describe('Один длинный автотест для [Покемонов]', function () {
    
    it('Вход на сайт Покемонов и покупка Аватара тренера №3', function () {
        cy.visit('https://pokemonbattle.me/login'); // заходим на страницу входа сайта
        cy.wait(5000);
        cy.get(':nth-child(1) > .auth__input').type('mdwjt@bloheyz.com'); //ищу инпут ввода имейл и ввожу логин
        cy.get('#password').type('QWer123'); //ищу инпут ввода пароля и ввожу пароль
        cy.get('.auth__button').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('.auth__button').click(); // клик по кнопке Войти
        cy.wait(10000);
        cy.get('.header__btns > [href="/shop"]').click(); // клик по кнопке Магазин 
        cy.wait(10000);
        cy.get(':nth-child(3) > .shop__button').click(); // клик по кнопке Купить (Аватар тренер №3)
        cy.wait(5000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100000000000008'); //ищу инпут ввода номер карты и ввожу номер карты при оформлении покупки
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); //ищу инпут ввода срока действия карты и ввожу срок действия карты при оформлении покупки
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ищу инпут кода и ввожу код при оформлении покупки
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVANICH'); //ищу инпут имени и ввожу имя при оформлении покупки
        cy.get('.pay-btn').click(); //клик по кнопке Оплатить
        cy.wait(5000);
        cy.get('.payment__submit-button').should('be.disabled'); // проверяем, что кнопка задизеблена
        cy.get('#cardnumber').type('56456'); //ищу инпут кода и ввожу код подтверждения покупки
        cy.get('.payment__submit-button').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('.payment__submit-button').click(); // клик по кнопке Отправить
        cy.wait(5000);
        cy.contains('Покупка прошла успешно').should('be.visible'); // наличие уведомления
        cy.get('.payment__adv').click(); //клик по кнопке Вернуться в магазин 

     })   
     it('Вход на сайт Покемонов и покупка Аватара тренера №6', function () {
        cy.visit('https://pokemonbattle.me/login'); // заходим на страницу входа сайта
        cy.wait(5000);
        cy.get(':nth-child(1) > .auth__input').type('mdwjt@bloheyz.com'); //ищу инпут ввода имейл и ввожу логин
        cy.get('#password').type('QWer123'); //ищу инпут ввода пароля и ввожу пароль
        cy.get('.auth__button').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('.auth__button').click(); // клик по кнопке Войти
        cy.wait(10000);
        cy.get('.header__btns > [href="/shop"]').click(); // клик по кнопке Магазин 
        cy.wait(10000);
        cy.get(':nth-child(6) > .shop__button').click(); // клик по кнопке Купить (Аватар тренер №6)
        cy.wait(5000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100000000000008'); //ищу инпут ввода номер карты и ввожу номер карты при оформлении покупки
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); //ищу инпут ввода срока действия карты и ввожу срок действия карты при оформлении покупки
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ищу инпут кода и ввожу код при оформлении покупки
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVANICH'); //ищу инпут имени и ввожу имя при оформлении покупки
        cy.get('.pay-btn').click(); //клик по кнопке Оплатить
        cy.wait(5000);
        cy.get('.payment__submit-button').should('be.disabled'); // проверяем, что кнопка задизеблена
        cy.get('#cardnumber').type('56456'); //ищу инпут кода и ввожу код подтверждения покупки
        cy.get('.payment__submit-button').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('.payment__submit-button').click(); // клик по кнопке Отправить
        cy.wait(5000);
        cy.contains('Покупка прошла успешно').should('be.visible'); // наличие уведомления
        cy.get('.payment__adv').click(); //клик по кнопке Вернуться в магазин 

     })   
     
})





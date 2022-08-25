import React from 'react';

export default function Content(){
    return (
        <div className="content">
            <div className="container">
                <div className="content__text">
                    Vad är WordPress-multisite?
                    WordPress Multisite är ett sätt att lägga till flera webbplatser till din WordPress-installation. Det är en funktion som du kan lägga till antingen din befintliga eller nyskapade WordPress-webbplats. För att aktivera WordPress Multisite lägger du till några rader kod till ett par filer i din WordPress-installation (som jag ska visa dig inom kort). Sedan skapar du webbplatser i ditt nätverk. Den befintliga webbplatsen stannar där, med sin URL oförändrad, medan de nya webbplatserna läggs till ovanpå.

                    WordPress-installation vs WordPress Multisite (viktiga skillnader):
                    Antalet enskilda webbplatser.
                    Användarrollerna – att aktivera Multisite lägger till nätverksadministratörsrollen.
                    Tillgång till teman och plugins – endast nätverksadministratören kan installera dem.
                    Adminskärmar – Multisite lägger till några nya skärmar för att hantera nätverket.
                    Hur media lagras – Multisite lägger till extra mappar för uppladdningar till varje webbplats.
                    Hur data lagras – Multisite skapar extra databastabeller för varje webbplats men lagrar vissa data (t. ex. användare) för hela nätverket.
                    Låt oss ta en närmare titt på dem.
                    CSS
Cascading Style Sheets (CSS) — это язык иерархических правил (таблиц стилей (en-US)), используемый для представления внешнего вида документа, написанного на HTML или XML (en-US) (включая различные языки XML, такие как SVG (en-US) и XHTML). CSS описывает, каким образом элемент должен отображаться на экране, на бумаге, голосом или с использованием других медиа средств.

CSS является одним из основных языков свободной веб-разработки, который стандартизован спецификацией W3C. Стандарт CSS делится на уровни: CSS1 в настоящее время устарел, CSS2.1 — рекомендован для применения, а CSS3, разбитый на более мелкие модули, развивается на пути стандартизации.

Справочник по CSS Исчерпывающий справочник для опытных веб-разработчиков, описывающий каждое свойство и понятие CSS.
Самоучитель по CSS Пошаговое руководство для помощи начинающим программистам CSS. Содержит все необходимые основы.
Примеры CSS3 Набор примеров представляющий новейшие технологии CSS в действии: толчок к креативности.
Документация и самоучители
Ключевые понятия CSS
Описание синтаксиса и внешнего вида языка (en-US) и введение в фундаментальные понятия такие как специфичность (en-US), наследование(каскадирование) (en-US), блочная модель(box-model) и схлопывание отступов(margin-collapse (en-US)), наложение (en-US) и контекст форматирования(Block formatting context (en-US)), начальное(initial (en-US)), вычисленное(computed (en-US)), используемое(used (en-US)) и актуальное(actual (en-US)) значения. Кроме того, описана краткая форма записи (en-US) свойств CSS.

Руководство разработчика CSS (en-US)
Статьи, которые помогут вам узнать все: начиная от основ организации стилей в HTML, заканчивая различными методами языка CSS, чтобы сделать свой контент сияющим.

Распространённые вопросы по CSS
Ответы на часто возникающие вопросы о CSS.

Инструменты для разработки CSS
Служба проверки W3C CSS проверяет правильность работы вашего CSS кода. Служба OnlineWebCheck.com делает то же самое. Это отличные инструменты для отладки.
Инструменты разработчика Firefox позволяют рассматривать и изменять "на лету" CSS страницы с помощью инструментов Инспектор и Редактор таблиц стилей.
Расширение Firebug для Firefox, популярное расширение для этого браузера, которое также позволяет редактировать "на лету" CSS код при просмотре сайтов. Помогает легко тестировать работу кода при внесении различных изменений. Помимо этого, расширение имеет другие полезные функции.
Расширение Web Developer для Firefox позволяет отслеживать и изменять "на лету" CSS код на просматриваемых сайтах. Проще чем Firebug, но обладает меньшей функциональностью.
Прочие инструменты CSS. (en-US)

                </div>
            </div>
        </div>
    )
}
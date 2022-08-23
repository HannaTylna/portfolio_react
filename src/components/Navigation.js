import React from 'react';

export default function Navigation(){
    return (
        <div class="wrapper">
            <header class="header">
                <div class="container">
                    <div class="header__body">
                        <div class="header__burger">
                            <span></span>
                        </div>
                        <nav class="header__menu">
                            <ul class="header__list">
                                <li>
                                    <a href="" class="header__link"></a>
                                </li>
                                <li>
                                    <a href="" class="header__link"></a>
                                </li>
                                <li>
                                    <a href="" class="header__link"></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div class="content">
                <div class="container">
                    <div class="content__text">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
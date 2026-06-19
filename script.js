// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLetter();
    initTimeline();
    initGallery();
    initMusic();
    initCounter();
    initMessages();
    initCuriosities();
    initDreams();
    initAudioPlayer();
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initExploreButton();
    initFloatingEmojis();

    // Initialize AOS (if using) or other animations
    // Initialize any other libraries if needed

    // Initialize visual effects
    initHeartParticles();
    initTextAnimations();
});

// Letter Section - Ruben's style letter
function initLetter() {
    const letterContent = document.querySelector('.letter-content');
    if (letterContent) {
        letterContent.innerHTML = `
            <p>Ale, mi vida, mi mailov, mi terroncito de azúcar...</p>

            <p>Ostia, donde empiezo... escribirte esta carta me hace sentir cosas que ni yo mismo sé explicar bien. Eres mi persona favorita en todo el mundo entero, y no es exageración, es la verdad pura y dura.</p>

            <p>Recuerdo el primer día que nos hablamos, ese "HOLAAA" tuyo y mi "OOOOLA" de nervios. Desde entonces, cada día contigo ha sido una aventura llena de risas, "JAJAJAJAJA" que no paran, y momentos que guardo como tesoros en mi corazón.</p>

            <p>Me encanta cómo me haces sentir cuando hablamos de música. Cuando me dices que amas AC/DC, Black Sabbath, Kiss, Nirvana y Maneskin, se me ilumina la cara. Imagino tus ojos brillando cuando pones esa música que tanto te hace sentirte vivo. Y cuando me dices "amo maneskin" con esa voz... dios, me ahogo de emoción.</p>

            <p>Tu forma de ser, tan expresiva, tan auténtica, me tiene loco. Esos "me ahogo", "me meo", esas risas exageradas que solo tú sabes hacer, esos "ostia" y las veces que yo digo "que locura"... son parte de lo que hace que seas tú, y yo no cambiaría nada de eso.</p>

            <p>Me vuelve loco cómo apoyas mis sueños, cómo te entusiasmas con mis locuras de cabello (sí, ese mullet/wolfcut que tanto quiero), cómo te preocupas por mí cuando estoy nervioso o ansioso. Eres mi refugio, mi persona segura en este mundo loco.</p>

            <p>Y esa conexión nuestra, esa de "conectados por la misma neurona"... es real, mi vida. Lo siento en cada mensaje, en cada llamada, en cada vez que nuestros pensamientos van por el mismo lado sin siquiera intentarlo. Es algo especial, algo que no tengo con nadie más.</p>

            <p>Quiero que sepas que estoy aquí para ti, siempre. Para escucharte cuando necesites desahogarte, para abrazarte cuando tengas un mal día, para reír contigo hasta que nos duela la garganta, para ser tu persona cuando el mundo se ponga difícil.</p>

            <p>Sé que nuestro comienzo fue hace unos 3 días, cuando me dijiste que ibas a cantar en la semana de la música. Desde ese momento, cada instante contigo ha sido especial. Quiero construir un futuro contigo, lleno de música, risas, y mucho amor.</p>

            <p>Gracias por ser quien eres, por amarme así de loco, por aguantar mis tonterías, por hacerme sentir visto y valorado cada día. Eres mi persona favorita, mi confidente, mi cómplice de todas las locuras, y sobre todo, mi amor.</p>

            <p>Te amo more than words can say, more than cualquiera podría imaginar. Eres mi todo, mi vida, mi razón para sonreír cada mañana.</p>

            <p>Tu Rubén, que te quiere mucho y que siempre va a estar aquí para ti 💚</p>
            <p class="letter-signature">Rubén</p>
        `;
    }
}

// Timeline Section
function initTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
        timelineContainer.innerHTML = `
            <div class="timeline-item">
                <div class="timeline-date">14/6/26</div>
                <div class="timeline-content">
                    <h3>Tu petición musical especial</h3>
                    <p>Me dijiste "Hola Rubenn me vas a mandar a la mierda pero en semana de la musica (en tres milenios de años mas o menos) por si te gustaria tipo cantar una cancion o algo" - mostrando tu valentía al pedirme que cante, a pesar de temer el rechazo. Este momento especial inspiró nuestra sección musical.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">15/6/26</div>
                <div class="timeline-content">
                    <h3>Nuestro primer "HOLAAA"</h3>
                    <p>El inicio de todo. Ese primer mensaje tuyo que me puso nervioso y emocionado al mismo tiempo. Fue el comienzo de nuestra historia.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">15/6/26</div>
                <div class="timeline-content">
                    <h3>El primer "OOOOLA" nervioso</h3>
                    <p>Mi respuesta nerviosa pero entusiasta a tu HOLAAA. Ya desde el primer momento sudaba de emoción al hablar contigo.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">16/6/26</div>
                <div class="timeline-content">
                    <h3>Descubriendonos a través de la música</h3>
                    <p>Tú diciendo "amo AC/DC" y "Black Sabbath", yo respondiendo con mi amor por estas bandas legendarias. La música nos unió desde el principio.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">16/6/26</div>
                <div class="timeline-content">
                    <h3>Nuestros sueños futuros empiezan a hablarse</h3>
                    <p>Tú mencionando tu sueño de ser actor o pintor, yo expresando mi deseo de apoyar tus metas. Comenzamos a imaginar nuestro futuro juntos.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">16/6/26</div>
                <div class="timeline-content">
                    <h3>El "vámonos apoyándonos"</h3>
                    <p>Yo expresando mi deseo de apoyarte en tu camino artístico, y tú respondiendo con entusiasmo por mi apoyo. Un momento que fortaleció nuestro compromiso mutuo.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">16/6/26</div>
                <div class="timeline-content">
                    <h3>Profundizando nuestra conexión</h3>
                    <p>Ese largo mensaje tuyo donde me dijiste que siempre estarías ahí para mí, que no me buscarías a alguien con menos problemas, que me quieres tal como soy. Me ahogaste de amor.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">17/6/26</div>
                <div class="timeline-content">
                    <h3>Manifestando nuestro futuro en la misma uni</h3>
                    <p>Tú diciendo "te imaginas acabamos en la misma uni" y yo sintiendo esa misma ilusión. El sueño de estudiar cerca el uno del otro empezó a tomar forma.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">17/6/26</div>
                <div class="timeline-content">
                    <h3>Nuestro primer apodo especial</h3>
                    <p>Tú empezando a llamarme "Rube" en vez de "Ruben", un detalle pequeño que mostró cuán cómodo y cercano nos sentíamos el uno con el otro.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">18/6/26</div>
                <div class="timeline-content">
                    <h3>Reafirmando nuestro amor</h3>
                    <p>Tú diciéndome que no me cambiarías ni por problemas ni peleas, que siempre estarías ahí para mí incluso si el mundo se pone en mi contra. Tu amor incondicional me dejó sin palabras.</p>
                </div>
            </div>
        `;
    }
}

// Gallery Section - using placeholders since we don't have actual images
function initGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        galleryContainer.innerHTML = `
            <div class="gallery-item">
                <img src="https://via.placeholder.com/400x300/6A1B9A/FFFFFF?text=Nuestro+Primer+HOLAAA" alt="Nuestro primer HOLAAA">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <h3 class="gallery-title">Nuestro Primer HOLAAA</h3>
                        <p class="gallery-description">El inicio de todo, el 15/6/26 a las 22:00</p>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/400x300/6A1B9A/FFFFFF?text=Música+Rockera" alt="Compartiendo nuestra pasión por el rock">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <h3 class="gallery-title">Nuestra Pasión por el Rock</h3>
                        <p class="gallery-description">AC/DC, Black Sabbath, Kiss, Nirvana y Maneskin - la banda sonora de nuestro amor</p>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/400x300/6A1B9A/FFFFFF?text=Nuestro+Futuro+Juntos" alt="Nuestro plan de futuro compartido">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <h3 class="gallery-title">Nuestro Futuro Compartido</h3>
                        <p class="gallery-description">Nuestro sueño de construir un futuro juntos, apoyándonos en nuestras respectivas carreras y pasiones</p>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/400x300/6A1B9A/FFFFFF?text=Nuestros+Apodos" alt="Nuestros apodos de cariño">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <h3 class="gallery-title">Nuestro Lenguaje de Amor</h3>
                        <p class="gallery-description">Mailov, mi amor, te amo, muakk, terroncito de azúcar, mi vida... nuestro diccionario de cariño</p>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/400x300/6A1B9A/FFFFFF?text=Conexión+Neuronal" alt="Representación de nuestra conexión especial">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <h3 class="gallery-title">Conectados por la misma neurona</h3>
                        <p class="gallery-description">Esa conexión especial que sentimos, donde nuestros pensamientos a menudo van parejos</p>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/400x300/6A1B9A/FFFFFF?text=Risas+Infinitas" alt="Nuestras risas contagiosas">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <h3 class="gallery-title">Nuestras Risas Contagiosas</h3>
                        <p class="gallery-description">Los JAJAJAJAJA que nos salen al hablar, esas risas que solo nosotros podemos generar el uno en el otro</p>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <img src="https://via.placeholder.com/400x300/6A1B9A/FFFFFF?text=Apoyo+Mutuo" alt="Nos apoyandonos incondicionalmente">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <h3 class="gallery-title">Nuestro Apoyo Incondicional</h3>
                        <p class="gallery-description">Prometernos estar ahí el uno para el otro, pase lo que pase, sin juzgar ni cambiar al otro</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Music Section
function initMusic() {
    const musicContainer = document.querySelector('.music-container');
    if (musicContainer) {
        musicContainer.innerHTML = `
            <div class="music-player">
                <div class="music-title">Nuestra Banda Sonora</div>
                <div class="music-artist">AC/DC • Black Sabbath • Kiss • Nirvana • Maneskin</div>

                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" id="progress-fill"></div>
                    </div>
                    <div class="time-display">
                        <span class="current-time">0:00</span>
                        <span class="duration">0:00</span>
                    </div>
                </div>

                <div class="music-buttons">
                    <button class="control-btn" id="prev-btn">
                        ⏮️
                    </button>
                    <button class="control-btn" id="play-pause-btn">
                        <i class="play-icon">▶️</i>
                        <i class="pause-icon">⏸️</i>
                    </button>
                    <button class="control-btn" id="next-btn">
                        ⏭️
                    </button>
                </div>

                <div class="playlist">
                    <h3>Nuestra Playlist</h3>
                    <ul>
                        <li>
                            <span class="playlist-song">Back in Black</span>
                            <span class="playlist-artist">AC/DC</span>
                        </li>
                        <li>
                            <span class="playlist-song">Paranoid</span>
                            <span class="playlist-artist">Black Sabbath</span>
                        </li>
                        <li>
                            <span class="playlist-song">Rock and Roll All Nite</span>
                            <span class="playlist-artist">Kiss</span>
                        </li>
                        <li>
                            <span class="playlist-song">Smells Like Teen Spirit</span>
                            <span class="playlist-artist">Nirvana</span>
                        </li>
                        <li>
                            <span class="playlist-song">Beggin'</span>
                            <span class="playlist-artist">Maneskin</span>
                        </li>
                        <li>
                            <span class="playlist-song">Highway to Hell</span>
                            <span class="playlist-artist">AC/DC</span>
                        </li>
                        <li>
                            <span class="playlist-song">Iron Man</span>
                            <span class="playlist-artist">Black Sabbath</span>
                        </li>
                        <li>
                            <span class="playlist-song">Detroit Rock City</span>
                            <span class="playlist-artist">Kiss</span>
                        </li>
                        <li>
                            <span class="playlist-song">Come As You Are</span>
                            <span class="playlist-artist">Nirvana</span>
                        </li>
                        <li>
                            <span class="playlist-song">The Loneliest</span>
                            <span class="playlist-artist">Maneskin</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}


// Counter Section
function initCounter() {
    const counterContainer = document.querySelector('.counter-container');
    if (counterContainer) {
        // Update counter every second
        function updateCounter() {
            // Calculate days since 15/6/26
            const startDate = new Date(2026, 5, 15); // June 15, 2026 (months are 0-indexed)
            const currentDate = new Date();
            const timeDiff = currentDate - startDate;
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            // Calculate hours, minutes, seconds
            const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutesDiff = Math.floor(timeDiff / (1000 * 60));
            const secondsDiff = Math.floor(timeDiff / 1000);

            counterContainer.innerHTML = `
                <div class="counter-display">
                    <div class="counter-number">${daysDiff}</div>
                    <div class="counter-label">días juntos</div>
                    <div class="counter-description">
                        Desde ese primer "HOLAAA" hasta hoy, cada día contigo ha sido un regalo.
                        <br>(${hoursDiff} horas, ${minutesDiff} minutos, ${secondsDiff} segundos de nosotros)
                    </div>
                </div>
            `;
        }

        // Initial update
        updateCounter();

        // Update every second
        setInterval(updateCounter, 1000);
    }
}

// Messages Section
function initMessages() {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
        messagesContainer.innerHTML = `
            <div class="message-card">
                <div class="message-header">
                    <div class="message-sender">🪺˒! > ᴀʟᴇ܀˙∘ 💚</div>
                    <div class="message-time">16/6/26, 16:35</div>
                </div>
                <div class="message-content">
                    Bro eres de las pocas personas que me entienden al 100% de las pocas que puedo confiar con quién no e tenido ningún problema nunca literalmente eres una hermana para mí y se que a veces (casi nunca) demuestro mucho que te quiero pero te quiero muchísimo contigo es con las primeras personas con quién cogí confianza Bro esq literalmente a tí te doy más abrazos que a nadie contigo soy más cariñoso y pues ya soy un poco más extrovertido no como antes y eso es gracias a tí de vdd yo te quiero mucho y se que no muchas veces se cómo responder pq pues ni yo mismo se resolver mis problemas pero yo siempre voy a estar para escucharte en cada cosa y abrazarte por cada minúscula cosa que te pase y estar contigo no me voy a buscar alguien que tenga menos problemas ni que se enfade menos ni que fuera menos divertida que tú pq tú eres la caña y no, no eres una puta mierda, eres una tía genial de vdd eres una persona que ayuda incluso cuando no tiene y eso dice mucho, yo te quiero muchísimo y no te cambiaría ni porque te enfades ni pq tuviésemos un problema, una pelea, lo que sea, pero no te voy a cambiar nunca. Okey? Yo te quiero muchísimo y que sepas que me tienes para todo lo que te haga falta aunque no sepa como responderte realmente o como no intentar ser una carga para ti y empezar a ser un pilar donde te puedes apoyar si te caes, voy a estar ahí incluso si todo el mundo se pone en tu contra, si?
                </div>
                <div class="message-footer">
                    <div class="message-reaction">
                        <span>❤️ 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">120</span>
                    </div>
                    <div class="message-reaction">
                        <span>😂 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">45</span>
                    </div>
                    <div class="message-reaction">
                        <span>😭 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">30</span>
                    </div>
                </div>
            </div>

            <div class="message-card">
                <div class="message-header">
                    <div class="message-sender">Rubén</div>
                    <div class="message-time">16/6/26, 16:26</div>
                </div>
                <div class="message-content">
                    vámonos juntos que cojones 💚
                </div>
                <div class="message-footer">
                    <div class="message-reaction">
                        <span>❤️ 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">95</span>
                    </div>
                    <div class="message-reaction">
                        <span>😍 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">60</span>
                    </div>
                    <div class="message-reaction">
                        <span>😎 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">25</span>
                    </div>
                </div>
            </div>

            <div class="message-card">
                <div class="message-header">
                    <div class="message-sender">🪺˒! > ᴀʟᴇ܀˙∘ 💚</div>
                    <div class="message-time">17/6/26, 17:43</div>
                </div>
                <div class="message-content">
                    Creo que nunca me había enamorado tan rápido de alguien y que hubiéramos conectado tanto tío ns
                </div>
                <div class="message-footer">
                    <div class="message-reaction">
                        <span>❤️ 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">110</span>
                    </div>
                    <div class="message-reaction">
                        <span>😭 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">50</span>
                    </div>
                    <div class="message-reaction">
                        <span>😍 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">75</span>
                    </div>
                </div>
            </div>

            <div class="message-card">
                <div class="message-header">
                    <div class="message-sender">🪺˒! > ᴀʟᴇ܀˙∘ 💚</div>
                    <div class="message-time">17/6/26, 16:23</div>
                </div>
                <div class="message-content">
                    Te imaginas acabamos en la misma uni
                </div>
                <div class="message-footer">
                    <div class="message-reaction">
                        <span>❤️ 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">85</span>
                    </div>
                    <div class="message-reaction">
                        <span>😊 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">40</span>
                    </div>
                    <div class="message-reaction">
                        <span>😘 󠁥 󠁦 󠁧󠁨</span>
                        <span class="reaction-count">35</span>
                    </div>
                </div>
            </div>
        `;
    }
}

// Curiosities Section
function initCuriosities() {
    const curiositiesContainer = document.querySelector('.curiosities-container');
    if (curiositiesContainer) {
        curiositiesContainer.innerHTML = `
            <div class="curiosity-card">
                <div class="curiosity-icon">🎵</div>
                <div class="curiosity-title">Nuestro Gusto Musical</div>
                <div class="curiosity-description">
                    Ambos amamos el rock clásico y moderno. Mientras Ale se inclina más por Maneskin y bandas contemporáneas, Ruben tiene un lugar especial en su corazón para AC/DC, Black Sabbath y Kiss. ¡Nuestros gustos se complementan perfectamente!
                </div>
            </div>

            <div class="curiosity-card">
                <div class="curiosity-icon">⚡</div>
                <div class="curiosity-title">Nuestra Conexión Especial</div>
                <div class="curiosity-description">
                    Ambos hemos mencionado sentirnos "conectados por la misma neurona". Esta conexión especial nos hace pensar parecido, terminar las frases del otro y entendernos incluso sin palabras.
                </div>
            </div>

            <div class="curiosity-card">
                <div class="curiosity-icon">🎨</div>
                <div class="curiosity-title">Los Sueños de Ale</div>
                <div class="curiosity-description">
                    Ale tiene un corazón artístico: sueña con ser actor, pintor o cantante. Le encanta expresarse a través del arte y quiere explorar estas pasiones en el futuro, quizás incluso estudiando en un bachillerato de artes.
                </div>
            </div>

            <div class="curiosity-card">
                <div class="curiosity-icon">🎓</div>
                <div class="curiosity-title">Los Planes de Ruben</div>
                <div class="curiosity-description">
                    Ruben tiene claro que quiere apoyar tus metas y crecer junto a ti en sus estudios y carrera. Le encantaría construir un futuro donde ambos podamos alcanzar nuestros sueños.
                </div>
            </div>

            <div class="curiosity-card">
                <div class="curiosity-icon">😂</div>
                <div class="curiosity-title">Nuestro Lenguaje Único</div>
                <div class="curiosity-description">
                    Hemos desarrollado nuestro propio dialecto de pareja: los "JAJAJAJAJA" exagerados, los "ostia" de expresión, las veces que yo digo "que locura", los "me ahogo"/"me meo" para mostrar emociones intensas, y nuestros apodos de cariño únicos que nadie más entiende.
                </div>
            </div>

            <div class="curiosity-card">
                <div class="curiosity-icon">💚</div>
                <div class="curiosity-title">Nuestro Color Especial</div>
                <div class="curiosity-description">
                    El verde 💚 es nuestro color especial. Lo usamos constantemente en nuestros mensajes, representa nuestra conexión y aparece en momentos importantes de nuestra comunicación. Es el color que nos define como pareja, basado en tu color favorito.
                </div>
            </div>

            <div class="curiosity-card">
                <div class="curiosity-icon">📅</div>
                <div class="curiosity-title">Nuestro Aniversario Ímplícito</div>
                <div class="curiosity-description">
                    Aunque no hemos celebrado un aniversario oficial, nuestro comienzo fue el 15/6/26 con ese primer "HOLAAA". Cada día desde entonces ha sido un paso más en nuestra historia juntos.
                </div>
            </div>
        `;
    }
}

// Dreams Section
function initDreams() {
    const dreamsContainer = document.querySelector('.dreams-container');
    if (dreamsContainer) {
        dreamsContainer.innerHTML = `
            <div class="dream-card">
                <div class="dream-icon">🎭</div>
                <div class="dream-title">Carreira Artística de Ale</div>
                <div class="dream-description">
                    Ale sueña con explorar su lado artístico a través de la actuación, la pintura o el canto. Quiere estudiar en un bachillerato de artes para desarrollar estas pasiones y algún día vivir de su arte.
                </div>
                <div class="dream-footer">
                    <span class="dream-date">Próximos 2-3 años</span>
                </div>
            </div>

            <div class="dream-card">
                <div class="dream-icon">🎓</div>
                <div class="dream-title">Apoyo Mutuo en Nuestras Carreras</div>
                <div class="dream-description">
                    Queremos apoyarnos mutuamente en nuestras respectivas carreras y estudios, creciendo juntos tanto a nivel personal como profesional.
                </div>
                <div class="dream-footer">
                    <span class="dream-date">Próximos 4-5 años</span>
                </div>
            </div>

            <div class="dream-card">
                <div class="dream-icon">🏙️</div>
                <div class="dream-title">Nuestro Futuro Compartido</div>
                <div class="dream-description">
                    Ambos soñamos con vivir nuestras vidas juntos, apoyándonos en nuestros respectivos caminos. Queremos construir un futuro donde ambos podamos crecer y ser felices, creciendo juntos en nuestras carreras y sueños.
                </div>
                <div class="dream-footer">
                    <span class="dream-date">Visión a largo plazo</span>
                </div>
            </div>

            <div class="dream-card">
                <div class="dream-icon">🎵</div>
                <div class="dream-title">Nuestros Conciertos Ideal</div>
                <div class="dream-description">
                    Ir juntos a conciertos de nuestras bandas favoritas: AC/DC, Black Sabbath, Kiss, Nirvana en clásico, y Maneskin en lo moderno. Compartir nuestras pasiones musicales en vivo sería un sueño hecho realidad.
                </div>
                <div class="dream-footer">
                    <span class="dream-date">Cuando tengamos oportunidad</span>
                </div>
            </div>

            <div class="dream-card">
                <div class="dream-icon">🌍</div>
                <div class="dream-title">Nuestros Viajes Soñados</div>
                <div class="dream-description">
                    Explorar nuevos lugares juntos, descubrir culturas, comidas y experiencias. Desde viajes corticos cerca de casa hasta aventuras más lejanas, queremos crear recuerdos juntos por todo el mundo.
                </div>
                <div class="dream-footer">
                    <span class="dream-date">A lo largo de nuestra relación</span>
                </div>
            </div>

        `;
    }
}

// Audio Player
function initAudioPlayer() {
    const audioPlayer = document.getElementById('background-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const progressFill = document.getElementById('progress-fill');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const audioTitleEl = document.querySelector('.audio-title');
    const audioArtistEl = document.querySelector('.audio-artist');
    const volumeBtn = document.createElement('button');
    const volumeIcon = document.createElement('i');

    if (!audioPlayer || !playPauseBtn) return;

    // Volume control
    volumeBtn.className = 'volume-btn';
    volumeIcon.className = 'volume-icon';
    volumeIcon.textContent = '🔊';
    volumeBtn.appendChild(volumeIcon);
    volumeBtn.title = 'Mute/Unmute';
    volumeBtn.style.background = 'none';
    volumeBtn.style.border = 'none';
    volumeBtn.style.color = 'var(--text-primary)';
    volumeBtn.style.fontSize = '1.5rem';
    volumeBtn.style.cursor = 'pointer';
    volumeBtn.style.transition = 'var(--transition-fast)';
    volumeBtn.style.marginLeft = '1rem';

    // Add volume button to audio controls
    const audioControls = document.querySelector('.audio-controls');
    if (audioControls) {
        audioControls.insertBefore(volumeBtn, audioControls.firstChild);
    }

    // Playlist of songs from our favorite bands - using local files
    const playlist = [
        { title: "Back in Black", artist: "AC/DC", file: "./music/back-in-black.mp3" },
        { title: "Paranoid", artist: "Black Sabbath", file: "./music/paranoid.mp3" },
        { title: "Rock and Roll All Nite", artist: "Kiss", file: "./music/rock-and-roll-all-nite.mp3" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", file: "./music/smells-like-teen-spirit.mp3" },
        { title: "Beggin'", artist: "Maneskin", file: "./music/beggin.mp3" }
    ];

    let currentTrack = 0;
    let isPlaying = false;
    let isMuted = false;
    let volumeLevel = 0.5;

    // Load first track
    function loadTrack(index) {
        const track = playlist[index];
        audioPlayer.src = track.file;
        audioPlayer.volume = volumeLevel;
        audioTitleEl.textContent = track.title;
        audioArtistEl.textContent = track.artist;
    }

    // Update progress bar
    function updateProgress() {
        // Check if duration is available (sometimes it's 0 initially)
        if (audioPlayer.duration > 0) {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressFill.style.width = progress + '%';
        }

        // Update time display
        const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
        const currentSeconds = Math.floor(audioPlayer.currentTime) % 60;
        const durationMinutes = Math.floor(audioPlayer.duration / 60);
        const durationSeconds = Math.floor(audioPlayer.duration) % 60;

        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
    }

    // Play/pause toggle
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="play-icon">▶️</i><i class="pause-icon">⏸️</i>';
        } else {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="pause-icon">⏸️</i><i class="play-icon">▶️</i>';
        }
        isPlaying = !isPlaying;
    });

    // Volume control
    volumeBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        if (isMuted) {
            audioPlayer.muted = true;
            volumeIcon.textContent = '🔇';
        } else {
            audioPlayer.muted = false;
            volumeIcon.textContent = '🔊';
        }
    });

    // Next track
    document.getElementById('next-btn').addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
        if (isPlaying) {
            audioPlayer.play();
        }
    });

    // Previous track
    document.getElementById('prev-btn').addEventListener('click', () => {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrack);
        if (isPlaying) {
            audioPlayer.play();
        }
    });

    // Update progress every second
    audioPlayer.addEventListener('timeupdate', updateProgress);

    // Reset when track ends
    audioPlayer.addEventListener('ended', () => {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
        if (isPlaying) {
            audioPlayer.play();
        }
    });

    // Handle mute/unmute
    audioPlayer.addEventListener('volumechange', () => {
        if (audioPlayer.muted) {
            volumeIcon.textContent = '🔇';
            isMuted = true;
        } else {
            volumeIcon.textContent = '🔊';
            isMuted = false;
        }
    });

    // Load first track
    loadTrack(0);
}

// Theme Toggle
function initThemeToggle() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.body.classList.add('light-mode');
    }

    // Create theme toggle button in navbar
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '<i class="theme-icon">🌙</i>';
        themeToggle.title = 'Toggle dark/light mode';
        themeToggle.style.background = 'none';
        themeToggle.style.border = 'none';
        themeToggle.style.color = 'var(--text-primary)';
        themeToggle.style.fontSize = '1.5rem';
        themeToggle.style.cursor = 'pointer';
        themeToggle.style.padding = '0.5rem';
        themeToggle.style.transition = 'var(--transition-fast)';

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLightMode = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
            themeToggle.innerHTML = isLightMode ? '<i class="theme-icon">☀️</i>' : '<i class="theme-icon">🌙</i>';
        });

        navContainer.appendChild(themeToggle);
    }
}

// Mobile Menu
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for navbar height
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// Explore Button
function initExploreButton() {
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.querySelector('#letter').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

// Floating Emojis - already handled by CSS animations
function initFloatingEmojis() {
    // The floating emojis are animated purely with CSS
    // This function is just for consistency
}

// Heart Particle System
function initHeartParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'heart-particle-container';
    document.body.appendChild(particleContainer);

    let particleCount = 0;
    const maxParticles = 50;

    // Create heart particle
    function createHeartParticle(x, y) {
        if (particleCount >= maxParticles) return;

        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = '💜';
        heart.style.position = 'fixed';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.opacity = '0';
        heart.style.transform = 'scale(0)';
        heart.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        particleContainer.appendChild(heart);
        particleCount++;

        // Animate heart
        setTimeout(() => {
            heart.style.opacity = '0.8';
            heart.style.transform = 'scale(1)';

            // Floating up animation
            const floatAnimation = setInterval(() => {
                const currentTop = parseFloat(heart.style.top);
                heart.style.top = `${currentTop - 1}px`;

                // Slight side-to-side drift
                const drift = Math.sin(Date.now() / 300) * 0.5;
                heart.style.left = `${parseFloat(heart.style.left) + drift}px`;

                // Fade out
                const currentOpacity = parseFloat(heart.style.opacity);
                if (currentOpacity <= 0) {
                    clearInterval(floatAnimation);
                    heart.remove();
                    particleCount--;
                } else {
                    heart.style.opacity = `${currentOpacity - 0.01}`;
                }
            }, 50);
        }, 10);
    }

    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        // Only create particles occasionally to avoid too many
        if (Math.random() < 0.3) {
            createHeartParticle(e.clientX, e.clientY);
        }
    });

    // Touch support for mobile
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0 && Math.random() < 0.3) {
            const touch = e.touches[0];
            createHeartParticle(touch.clientX, touch.clientY);
        }
    }, { passive: true });
}

// Text Animations for characteristic phrases
function initTextAnimations() {
    // Select elements that contain text we want to animate
    const animatedSelectors = [
        '.hero-subtitle',
        '.section-header .section-subtitle',
        '.letter-content p',
        '.timeline-content p',
        '.gallery-description',
        '.music-artist',
        '.curiosity-description',
        '.dream-description'
    ];

    // Characteristic phrases to animate
    const characteristicPhrases = [
        'JAJAJAJAJA',
        'JAJAJJAAJA',
        'ostia',
        'que locura',
        'me ahogo',
        'me meo',
        'TLJ',
        'mailov',
        'mi amor',
        'te amo',
        'muakk',
        'terroncito de azúcar',
        'mi vida',
        'conectados por la misma neurona'
    ];

    // Function to wrap text spans for animation
    function animateTextInElement(element) {
        if (!element) return;

        let text = element.textContent;

        // Replace characteristic phrases with animated spans
        characteristicPhrases.forEach(phrase => {
            const regex = new RegExp(`(${phrase})`, 'gi');
            text = text.replace(regex, '<span class="animated-text">$1</span>');
        });

        element.innerHTML = text;

        // Add animation event listeners
        const animatedSpans = element.querySelectorAll('.animated-text');
        animatedSpans.forEach(span => {
            // Random delay for each animation
            span.style.animationDelay = `${Math.random() * 2}s`;
            span.style.animationIterationCount = 'infinite';
        });
    }

    // Apply to selected elements
    animatedSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            animateTextInElement(element);
        });
    });

    // Also animate specific parts of the letter that might be added dynamically
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.matches &&
                        (node.matches('.letter-content') ||
                         node.matches('.timeline-content p') ||
                         node.matches('.gallery-description') ||
                         node.matches('.curiosity-description') ||
                         node.matches('.dream-description'))) {
                        animateTextInElement(node);
                    }
                });
            }
        });
    });

    // Start observing the document body for added nodes
    observer.observe(document.body, { childList: true, subtree: true });
}


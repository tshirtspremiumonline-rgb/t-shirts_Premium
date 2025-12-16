     lucide.createIcons();

        // -- Estado del Carrito --
        let cartCount = 0;
        const cartBadge = document.getElementById('cart-count');

        function addToCart() {
            cartCount++;
            cartBadge.innerText = cartCount;
            cartBadge.classList.remove('hidden');
            
            // Efecto visual simple (opcional)
            const btn = document.querySelector('button[onclick="addToCart()"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="check" class="mr-2 h-5 w-5"></i> Añadido`;
            lucide.createIcons();
            setTimeout(() => {
                btn.innerHTML = originalText;
                lucide.createIcons();
            }, 1000);
        }

        // -- Menú Móvil --
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = mobileMenuBtn.querySelector('svg'); // El icono SVG generado

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // -- Selector de Talla --
        function selectSize(btn) {
            // Remover clase active de todos los botones de talla
            document.querySelectorAll('.size-btn').forEach(b => {
                b.classList.remove('active', 'bg-blue-600', 'text-white', 'shadow-md', 'transform', 'scale-105', 'border-transparent');
                b.classList.add('bg-white', 'text-slate-900', 'border-slate-200', 'hover:bg-slate-50');
            });
            
            // Añadir clase active al botón clickeado
            btn.classList.remove('bg-white', 'text-slate-900', 'border-slate-200', 'hover:bg-slate-50');
            btn.classList.add('active', 'bg-blue-600', 'text-white', 'shadow-md', 'transform', 'scale-105', 'border-transparent');
        }

        // -- Selector de Color --
        function selectColor(colorName, btn) {
            // Actualizar texto del color
            document.getElementById('selected-color-name').innerText = colorName;

            // Resetear estilos de todos los botones de color
            document.querySelectorAll('.color-btn').forEach(b => {
                b.classList.remove('active', 'ring-2', 'ring-blue-600', 'ring-offset-2');
                b.classList.add('hover:ring-2', 'hover:ring-slate-300', 'hover:ring-offset-2');
            });

            // Activar botón clickeado
            btn.classList.remove('hover:ring-2', 'hover:ring-slate-300', 'hover:ring-offset-2');
            btn.classList.add('active', 'ring-2', 'ring-blue-600', 'ring-offset-2');
        }

        // -- Galería de Imágenes --
        function changeImage(index) {
            // Actualizar contadores y visualización
            document.getElementById('image-counter').innerText = `Imagen ${index + 1} de 4`;
            
            // Actualizar bordes de miniaturas
            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach((thumb, idx) => {
                if (idx === index) {
                    thumb.classList.add('active', 'ring-2', 'ring-blue-600');
                    thumb.classList.remove('ring-1', 'ring-slate-200');
                } else {
                    thumb.classList.remove('active', 'ring-2', 'ring-blue-600');
                    thumb.classList.add('ring-1', 'ring-slate-200');
                }
            });

            // Aquí normalmente cambiaríamos el src de una imagen real.
            // Como usamos divs placeholder, haremos una pequeña animación de opacidad para simular el cambio.
            const mainDisplay = document.getElementById('main-image-display');
            mainDisplay.style.opacity = '0.5';
            setTimeout(() => {
                mainDisplay.style.opacity = '1';
            }, 200);
        }

        // -- Pestañas (Descripción / Cuidados) --
        function toggleTab(tabId) {
            const content = document.getElementById(`content-${tabId}`);
            const icon = document.getElementById(`icon-${tabId}`);
            
            // Si está oculto, mostrarlo. Si está visible, ocultarlo.
            if (content.classList.contains('hidden-custom')) {
                content.classList.remove('hidden-custom');
                icon.setAttribute('data-lucide', 'chevron-up');
            } else {
                content.classList.add('hidden-custom');
                icon.setAttribute('data-lucide', 'chevron-down');
            }
            lucide.createIcons(); // Recargar icono nuevo
        }

        // Asegurarse de que el acordeón funciona como uno solo (opcional: cerrar el otro al abrir uno)
        // Por ahora lo dejamos independiente como en el diseño original.
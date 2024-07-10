import Logo from "/icons/Logo.svg";

export default function renderFooter() {
    return `
        <footer class="w-full py-14">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="max-w-3xl mx-auto">
                    <a href="#" class="flex justify-center border-t border-gray-200 py-4">
                        <img src="${Logo}" alt="Logo" class="h-8 w-auto sm:h-10" />
                    </a>

                    <small class="text-sm text-gray-500 text-center block">
                        Made with ❤️ by
                        <a href="https://github.com/justgritt">JustGritt</a>
                    </small>
                </div>
            </div>
        </footer>
    `;
}
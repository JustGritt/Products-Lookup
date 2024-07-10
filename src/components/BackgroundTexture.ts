export default function renderBackgroundTexture() {
    return `
        <div
            class="absolute top-48 right-16 inset-x-0 ml-auto h-80 max-w-lg bg-gradient-to-tr from-orange-200 via-pink-200 to-violet-300 blur-[118px]">
        </div>
        <div
            class="absolute bottom-32 left-6 inset-x-0 h-80 max-w-lg bg-gradient-to-tr from-violet-200 via-red-200 to-yellow-300 blur-[118px]">
        </div>
    `;
}
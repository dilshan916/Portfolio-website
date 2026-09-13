export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Elegant static ambient glows using radial gradients (0% CPU/GPU overhead) */}
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
            <div className="absolute top-[35%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_70%)]" />

            {/* Subtle tech grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />

            {/* Vignette dark overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_85%)]" />
        </div>
    );
}

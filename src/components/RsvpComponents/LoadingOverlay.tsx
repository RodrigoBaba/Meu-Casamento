type Props = {
    loading: boolean
}

export default function LoadingOverlay({
    loading
}: Props) {

    if (!loading) return null

    return (

        <div className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            backdrop-blur-sm
        ">

            <div className="
                bg-white/10
                p-6
                rounded-3xl
                shadow-2xl
                backdrop-blur-md
            ">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="
                        w-72
                        rounded-3xl
                        object-cover
                    "
                >
                    <source
                        src="../videos/loading.mp4"
                        type="video/mp4"
                    />
                </video>

            </div>

        </div>
    )
}
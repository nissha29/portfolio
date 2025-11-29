import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Nisha | Full Stack Developer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                    color: 'white',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        opacity: 0.2,
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        border: '1px solid #333',
                        padding: '40px 80px',
                        borderRadius: '20px',
                        background: 'rgba(0,0,0,0.5)',
                        boxShadow: '0 0 50px rgba(255,255,255,0.1)',
                    }}
                >
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 'bold',
                            marginBottom: 20,
                            background: 'linear-gradient(to bottom right, #fff, #888)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        NISHA
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#888',
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Full Stack Developer
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}

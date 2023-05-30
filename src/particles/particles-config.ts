import { ISourceOptions } from 'tsparticles-engine'

export const particlesConfig: ISourceOptions = {
    fullScreen: false,
    fpsLimit: 120,
    particles: {
        color: {
            value: '#0d47a1',
        },
        number: {
            value: 5,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'bubble-text',
            options: {
                'bubble-text': {
                },
            },
        },
        size: {
            value: { min: 100, max: 150 },
        },
    },
    detectRetina: true,
}

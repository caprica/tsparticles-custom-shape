import { IParticle, IDelta } from 'tsparticles-engine'

export const bubbleTextShape = (
    context: CanvasRenderingContext2D,
    particle: IParticle,
    radius: number,
    opacity: number,
    delta: IDelta,
    pixelRatio: number,
) => {
    context.save()

    context.globalAlpha = opacity;

    // Normally for an arc, you'd beginPath and fill, but it seems not needed here,
    // having it or not having seems to make no difference

    // context.beginPath()
    context.arc(0, 0, radius, 0, Math.PI * 2)
    // context.fill()

    const fontStyle = 'normal'
    const fontWeight = '400'
    const fontSize = radius / 3.2
    const font = 'sans'

    context.font = `${fontStyle} ${fontWeight} ${fontSize}px ${font}`
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    // Here, I want to the text to render as full white, no transparency - but this does not work
    context.globalAlpha = 1.0
    context.fillStyle = 'white'
    context.fillText("HELLO", 0, 0)

    context.restore()
}

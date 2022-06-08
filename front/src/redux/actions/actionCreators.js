/**
 * Aquí van los creadores de acciones
 */

// imports
import { SAMPLE_ACTION } from "./actions"

// Creadores de acciones
export function sampleAction(value) {
    return {
        type: SAMPLE_ACTION,
        payload: value
    }
}
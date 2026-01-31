export function safe (fn , fallback){
    try {
        return fn()
    }catch {
        return fallback
    }
}
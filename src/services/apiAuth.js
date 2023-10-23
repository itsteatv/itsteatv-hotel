import supabase from "./supabase";

export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        throw new Error(error.message)
    }

    return data
}

export async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
            redirectTo: "https://wbwcdwquffnvigyndarr.supabase.co/auth/v1/callback"
        }
    })

    if (error) {
        throw new Error(error.message)
    }
}

export async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) {
        throw new Error(error.message)
    }
}
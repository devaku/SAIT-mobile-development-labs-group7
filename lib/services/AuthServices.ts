import { supabase } from '../supabase';

export async function SupabaseLogout() {
	try {
		const { error } = await supabase.auth.signOut();
		if (error) {
			throw error;
		}
	} catch (error) {
		console.log(error);
	}
}

export async function SupabaseLogin(email: string, password: string) {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
	} catch (error: any) {
		console.log(error);
	}
}

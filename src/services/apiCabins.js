import supabase from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error);
        throw new Error(error);
    }

    console.log(data);

    return data;
}

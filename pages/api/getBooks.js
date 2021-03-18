import supabase from '../../src/lib/utils/supabase/init'

export default async (req, res) => {
    console.log("okay api")

    const { data: booksData, error: booksError } = await supabase
  .from('Books')
        .select('*')
    console.log(booksData, booksError)
    if (booksData) {
        res.status(200).send(booksData)
    } else if (!booksData || booksData === []) {
        res.status(403).send("fuck you")
    }

}
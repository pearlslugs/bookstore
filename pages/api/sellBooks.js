
  
    import supabase from '../../src/lib/utils/supabase/init'

export default async (req, res) => {
    const body = req.body;
    const titles = body.titles;
    const stocks = body.stocks

    titles.map(async (book, i) => {
        console.log(book, stocks[i])
        const { data: booksData, error: booksError } = await supabase
            .from('Books')
            .update({ stock: stocks[i] })
            .match({ title: book })
        console.log(booksData, booksError)
    });
    res.status(200).send("okay")
}
export const search = async ctx => {
    ctx.body = {
        queries : [
            'abc', 'bcd', 'cde'
        ]
    };
}
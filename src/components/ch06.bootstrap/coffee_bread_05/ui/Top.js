function App({ title, comment }) {
    console.log('샘플');


    return (
        <>
            <h4 style={{ fontWeight: 'bolder' }}>{title}</h4>
            {comment}
        </>
    );
};
export default App;
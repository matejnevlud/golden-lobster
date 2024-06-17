'use client';

export default function WaiterView(props) {

    const { allData } = props;


    window.addEventListener('storage', function(event) {
        alert('storage event');
    });


    return (
        <>
        <div style={{ flex: 1, backgroundColor: 'black' }}>
            <iframe src="/" height="100%" width="100%"/>
        </div>
        <div style={{ flex: 1, backgroundColor: 'white' }}>

        </div>
        </>
    )
}
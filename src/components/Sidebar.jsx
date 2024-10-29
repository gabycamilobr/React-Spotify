export default function Sidebar({ children }) {
    return (
        <>
    <aside style={{ backgroundColor: '#a238fe' }} className="w-3/12 flex flex-col justify-around items-center">
        {children}
    </aside>
        </>
    )
}
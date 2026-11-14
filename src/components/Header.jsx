function Header() {
    return (
        <header className="flex items-center justify-between border-b border-slate-200 bg-white p-4">
            <h1 className="text-2xl font-bold text-slate-800">XYZ App</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-slate-600 hover:text-slate-800">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-slate-600 hover:text-slate-800">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-slate-600 hover:text-slate-800">
                            Transactions
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
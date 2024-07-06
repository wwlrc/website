export default function NavbarBtn(
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>) {
    return (
        <span className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{children}</span>
    )
}
export default function NavbarBtn(
    {
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>) {
    return (
        <span className="block py-4 px-3 md:px-0 text-gray-900 rounded md:border-0 hover:text-blue-700 dark:text-white dark:hover:text-blue-200">{children}</span>
    )
}
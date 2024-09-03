import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className="bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <Image
              src="/assets/images/header/logo-teste.png"
              alt="Logo do casamento de Gabriel e Gabriela, com as letras 'G' entrelaçadas e detalhes florais."
              width={80}
              height={50}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

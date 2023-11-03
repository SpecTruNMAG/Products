import style from "@/components/ui/Footer/footer.module.css"
import Logo from "@/assets/svg/logo.svg"
import Image from "next/image";

function Footer() {
  return (
    <>
    <footer className={style.footer}>
      <div>
        <Logo/>
      </div>
      <div>
        
        <form action="" method="post">
          <label htmlFor="email">Sign Up for our newsletter & updates</label>
          <input type="text" name="email" id="" />
          <input type="button" value="=>" />
        </form>
        <div>
          <span>CONTACT</span>
          <span>PRIVACY POLICY</span>
        </div>
        <h3>Designed by Miguel Angel</h3>
      </div>

      <div>
        <h3>Follow us</h3>
        <Image src="#" alt="instagrand" />
        <Image src="#" alt="facebook" />
        <Image src="#" alt="twitter" />
        <Image src="#" alt="yelp"/>
      </div>

      <div>
        <h3>Get the Flour app</h3>
        <Image src="#" alt="mac" />
        <Image src="#" alt="android" />
        <p>Copyright © 2023 Flour Bakery</p>
      </div>
    </footer>
      
    </>
  );
}

export default Footer;

import Image from "next/image";
import farm4 from "../../public/farm-pics/farm4.jpg";
import styles from '@/styles/FeaturesMain.module.css';

function Features() {
    return (
        <div className={styles.main} id="products">
            <div className={styles.details}>
                <h1>Products we provide</h1>

                <div>
                    <h2>Livestock Management</h2>
                    <p>
                        Monitor your herd without having to get out your record book. Maintain sire and genetic information for future breeding decisions.  Document each animal by sex, color, and health for quick reference.
                    </p>
                </div>

                <div>
                    <h2>Inventory Management</h2>
                    <p>
                        Oversee quantities of your stored grain, chemical, and equipment.
                    </p>
                </div>

                <div>
                    <h2>Purchasing and Sales</h2>
                    <p>
                        Document all purchases and sales within your operation to create a detailed record of all transactions. Know the status of invoices to avoid missed collections or payments.
                    </p>
                </div>
            </div>

            <div className={styles.image}>
                <Image 
                src={farm4}
                alt=""
                layout="responsive"
                width={700}
                height={500}/>
            </div>
        </div>
    );
}

export default Features;
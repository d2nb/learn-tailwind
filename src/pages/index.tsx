import Layout from '@/components/Layout';
import { ReactComponent as XixiSVG } from '@/assets/xixi.svg';
import { ReactComponent as HahaSVG } from '@/assets/haha.svg';
import { ReactComponent as HeiheiSVG } from '@/assets/heihei.svg';
import { ReactComponent as HeheSVG } from '@/assets/hehe.svg';

const Page = () => (
  <Layout>
    <section className="bg-gray-50 py-20">
      <h1 className="kcz-container text-4xl md:text-6xl font-medium">苦茶子</h1>
      <p className="kcz-container text-base md:text-lg mt-2 md:mt-4 font-medium">安全、可靠、huā lǐ hú shào</p>
    </section>
    <section className="kcz-container py-8">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <li className="flex justify-center items-center">
          <XixiSVG className="w-8 h-8 mr-2" />
          嘻嘻
        </li>
        <li className="flex justify-center items-center">
          <HahaSVG className="w-8 h-8 mr-2" />
          哈哈
        </li>
        <li className="flex justify-center items-center">
          <HeiheiSVG className="w-8 h-8 mr-2" />
          嘿嘿
        </li>
        <li className="flex justify-center items-center">
          <HeheSVG className="w-8 h-8 mr-2" />
          呵呵
        </li>
      </ul>
    </section>
  </Layout>
);

export default Page;

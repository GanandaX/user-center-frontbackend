import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '嘿嘿嘿看我出品不出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Gitee-GnandaX',
          title: 'Gitee-GnandaX',
          href: 'https://gitee.com/GnandaX',
          blankTarget: true,
        },
        {
          key: 'GitHub-GnandaX',
          title: <><GithubOutlined /> GanandaX</>,
          href: 'https://github.com/GanandaX',
          blankTarget: true,
        }
      ]}
    />
  );
};

export default Footer;

import LoginIcon from '../../assets/images/icon-login.png';
import EditIcon from '../../assets/images/icon-edit.png';
import GuidesIcon from '../../assets/images/icon-guides.png';
import ContactIcon from '../../assets/images/icon-contact.png';
import LanguageIcon from '../../assets/images/icon-languages.png';

export const LIST_MENU = [
  {
    label: 'Log in',
    icon: LoginIcon,
    link: '#',
    className: ''
  },
  {
    label: 'Sign up',
    icon: EditIcon,
    link: '#',
    className: ''
  },
  {
    label: 'Guides and FAQ',
    icon: GuidesIcon,
    link: '#',
    className: ''
  },
  {
    label: 'Contact us',
    icon: ContactIcon,
    link: '#',
    className: '--border'
  },
  {
    label: 'Language',
    icon: LanguageIcon,
    link: '#',
    options: [
      {
        text: 'English',
        value: 'EN'
      },
      {
        text: 'Bahasa Indonesia',
        value: 'ID'
      },
      {
        text: 'Tiếng Việt',
        value: 'VN'
      }
    ],
    className: '--border'
  }
]

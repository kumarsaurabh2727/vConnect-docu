// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started with vConnect',
      items: [
        {
          type: 'category',
          label: 'Creating an Account on Vahana',
          items: [
            'getting-started-with-vConnect/creating-account-on-vahana/registering-on-vahana',
            'getting-started-with-vConnect/creating-account-on-vahana/accessing-vahana-portal',
            'getting-started-with-vConnect/creating-account-on-vahana/accessing-pm-workbench',
          ],
        },
        {
          type: 'category',
          label: 'vConnect Features',
          items: [
            'getting-started-with-vConnect/vConnect-features/vConnect-core-functions',
            'getting-started-with-vConnect/vConnect-features/vConnect-connector',
            'getting-started-with-vConnect/vConnect-features/miscellaneous-features',
          ],
        },
      ],
    },
  ],
};

export default sidebars;

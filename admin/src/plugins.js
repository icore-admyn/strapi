
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import menus from '../../../node_modules/strapi-plugin-menus/strapi-admin.js';
import ckeditor5 from '../../../node_modules/@_sh/strapi-plugin-ckeditor/strapi-admin.js';
import dragDropContentTypes from '../../../node_modules/@retikolo/drag-drop-content-types/strapi-admin.js';
import colorPicker from '../../../node_modules/@strapi/plugin-color-picker/strapi-admin.js';
import documentation from '../../../node_modules/@strapi/plugin-documentation/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import seo from '../../../node_modules/@strapi/plugin-seo/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import importExportEntries from '../../../node_modules/strapi-plugin-import-export-entries/strapi-admin.js';
import multiSelect from '../../../node_modules/strapi-plugin-multi-select/strapi-admin.js';
import sitemap from '../../../node_modules/strapi-plugin-sitemap/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'menus': menus,
  'ckeditor5': ckeditor5,
  'drag-drop-content-types': dragDropContentTypes,
  'color-picker': colorPicker,
  'documentation': documentation,
  'i18n': i18N,
  'seo': seo,
  'users-permissions': usersPermissions,
  'import-export-entries': importExportEntries,
  'multi-select': multiSelect,
  'sitemap': sitemap,
};

export default plugins;

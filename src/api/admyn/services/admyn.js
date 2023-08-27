'use strict';

/**
 * admyn service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admyn.admyn');

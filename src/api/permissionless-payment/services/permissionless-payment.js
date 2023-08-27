'use strict';

/**
 * permissionless-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::permissionless-payment.permissionless-payment');

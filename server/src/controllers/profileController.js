const { PrismaClient } = require('@prisma/client');
const { profileSchema } = require('../validators/profileValidator');
const { successResponse, errorResponse } = require('../utils/response');

const prisma = new PrismaClient();

const createProfile = async (req, res) => {
  try {
    const { error, value } = profileSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json(errorResponse('Validation failed', error.details));
    }

    const profile = await prisma.profile.create({
      data: {
        fullName: value.fullName,
        email: value.email,
        spokenLanguages: value.spokenLanguages,
        codingLanguages: value.codingLanguages,
        yearsExperience: value.yearsExperience,
        blockchainExperience: value.blockchainExperience
      }
    });

    return res.status(201).json(successResponse('Profile created', profile));
  } catch (err) {
    if (err.code === 'P2002') {
        const field = err.meta?.target?.[0] || 'Field';
        return res.status(409).json(errorResponse(`${field} already exists`));
    }      
    console.error(err);
    return res.status(500).json(errorResponse('Internal Server Error'));
  }
};

module.exports = { createProfile };

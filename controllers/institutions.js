import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getInstitutions = async (req, res) => {
  try {
    const institutions = await prisma.institution.findMany({
      include: {
        departments: true,
      },
    });

    if (institutions.length === 0) {
      return res.status(200).json({ msg: "No institutions found" });
    }

    return res.json({ data: institutions });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const createInstitution = async (req, res) => {
  try {
    const { name, region, country } = req.body; // destructuring object

    await prisma.institution.create({
      data: { name, region, country },
    });

    const newInstitutions = await prisma.institution.findMany({
      include: {
        departments: true,
      },
    });

    return res.status(201).json({
      msg: "Institution successfully created",
      data: newInstitutions,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const updateInstitution = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, region, country } = req.body;

    let institution = await prisma.institution.findUnique({
      where: { id: Number(id) },
    });

    if (!institution) {
      return res
        .status(201)
        .json({ msg: `No institution with the id: ${id} found` });
    }

    institution = await prisma.institution.update({
      where: { id: Number(id) },
      data: { name, region, country },
    });

    return res.json({
      msg: `Institution with the id: ${id} successfully updated`,
      data: institution,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const deleteInstitution = async (req, res) => {
  try {
    const { id } = req.params;

    const institution = await prisma.institution.findUnique({
      where: { id: Number(id) },
    });

    if (!institution) {
      return res
        .status(200)
        .json({ msg: `No institution with the id: ${id} found` });
    }

    await prisma.institution.delete({
      where: { id: Number(id) },
    });

    return res.json({
      msg: `Institution with the id: ${id} successfully deleted`,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

const getInstitution = async (req, res) => {
  try {
    const { id } = req.params;

    const institution = await prisma.institution.findUnique({
      where: { id: Number(id) },
    });

    if (!institution) {
      return res
        .status(200)
        .json({ msg: `No institution with the id: ${id} found` });
    }

    return res.json({
      data: institution,
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export {
  getInstitution, 
  getInstitutions, 
  createInstitution,
  updateInstitution,
  deleteInstitution
};
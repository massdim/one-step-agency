const { User, Talent, Talents_Image } = require("../../models");
const { Op } = require("sequelize");

class AdminController {
  static async showAllTalents(req, res) {
    let { page, search } = req.params;

    const totalTalents = await Talent.findAll({});

    const limit = 5;
    const totalPage = Math.ceil(totalTalents.length / limit);
    const offset = (page - 1) * limit;

    try {
      const talents = await Talent.findAll({
        offset,
        limit,
        include: [
          {
            model: Talents_Image,
            where: { primary: true },
            attributes: ["fileName"],
          },
        ],
        // where: {
        //   fullName: {
        //     [Op.iLike]: `%${search}%`,
        //   },
        // },
        order: [["id", "ASC"]],
      });

      res.status(200).json({
        status: 200,
        message: "All talents displayed successfully!",
        data: {
          totalTalents: totalTalents.length,
          totalPage,
          talents,
        },
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showOneTalent(req, res) {
    let { id } = req.params;

    try {
      const talent = await Talent.findByPk(id, {
        include: [
          {
            model: Talents_Image,
            // where: { primary: true },
            attributes: ["fileName"],
          },
        ],
      });

      res.status(200).json({
        status: 200,
        message: "One talent displayed successfully!",
        data: {
          talent,
        },
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addTalent(req, res) {
    const user_data = req.user_data;
    const files = req.files;

    const {
      fullName,
      nationality,
      age,
      birth,
      height,
      weight,
      category,
      price,
      accountSocial,
    } = req.body;

    try {
      const talent = await Talent.create({
        UserId: user_data.id,
        fullName,
        nationality,
        age,
        birth,
        height,
        weight,
        category,
        price,
        accountSocial,
      });

      if (files.length > 0) {
        files.forEach(async (file, index) => {
          await Talents_Image.create({
            TalentId: talent.id,
            fileName: file.filename,
            fileSize: file.size,
            fileType: file.mimetype,
            primary: index === 0 ? true : false,
          });
        });
      } else {
        await Talents_Image.create({
          TalentId: talent.id,
          fileName: "blank.png",
          fileSize: 22,
          fileType: ".png",
          primary: true,
        });
      }

      res.status(201).json({
        status: 201,
        message: "Talent added successfully!",
        data: {
          talent,
        },
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateTalent(req, res) {
    const id = +req.params.id;

    const {
      fullName,
      nationality,
      age,
      birth,
      height,
      weight,
      category,
      price,
      accountSocial,
    } = req.body;

    try {
      const talent = await Talent.update(
        {
          fullName,
          nationality,
          age,
          birth,
          height,
          weight,
          category,
          price,
          accountSocial,
        },
        { where: { id } }
      );

      res.status(200).json({
        status: 200,
        message: "Talent updated successfully!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = AdminController;

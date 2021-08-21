const { User, Talent, Talents_Image } = require("../../models");

class AdminController {
  static async addTalent(req, res) {
    const user_data = req.user_data;
    const {
      fullName,
      nationality,
      age,
      birth,
      height,
      weight,
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
        price,
        accountSocial,
      });

      for (let i = 0; i < 4; i++) {
        const fileName = "placeholder.jpg";
        const fileSize = 100;
        const fileType = "jpg";
        const primary = i === 0 ? true : false;

        await Talents_Image.create({
          TalentId: talent.id,
          fileName,
          fileSize,
          fileType,
          primary,
        });
      }

      res.status(201).json({
        status: 201,
        message: "Talent added successfully!",
        talent,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = AdminController;

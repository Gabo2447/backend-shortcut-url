import { Router } from "express";
import type { Router as RouterType } from "express";

import { saveUrl, getUrl } from "../models/store.js";

const router: RouterType = Router();

router.post("/shorten", (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "URL is required" });

  const slug = saveUrl(url);
  const shortUrl = `/api/${slug}`;

  return res.json({ shorten: shortUrl });
});

router.get("/:slug", (req, res) => {
  const { slug } = req.params;
  const url = getUrl(slug);

  if (!url) return res.status(404).json({ error: "URL not found" });
  return res.redirect(url);
});

export default router;

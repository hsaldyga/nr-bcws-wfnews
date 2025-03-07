resource "aws_s3_bucket" "wfnews_upload_bucket" {
  bucket        = "wfnews-${var.target_env}-uploads"
  acl           = "private"
  force_destroy = true
}

resource "aws_s3_bucket" "wfnews_log_bucket" {
  bucket        = "wfnews-${var.target_env}-logs"
  acl           = "private"
  force_destroy = true
}
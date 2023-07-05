resource "aws_cloudwatch_log_group" "log-group" {
  name              = "/ecs/app"
  retention_in_days = var.log_retention_in_days
}

resource "aws_cloudwatch_log_stream" "log-stream" {
  name           = "app-log-stream"
  log_group_name = aws_cloudwatch_log_group.log-group.name
}
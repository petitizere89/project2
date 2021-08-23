package com.project2.displayimage;

import java.io.ByteArrayOutputStream;

public interface S3Services {
	public ByteArrayOutputStream downloadFile(String keyName);
}

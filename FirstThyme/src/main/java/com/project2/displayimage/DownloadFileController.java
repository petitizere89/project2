package com.project2.displayimage;

import java.io.ByteArrayOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public class DownloadFileController {
	@Autowired
	S3Services s3Services;
	 	
    /*
     * Download Files
     */
	@GetMapping("/api/image/logo")
	public ResponseEntity<byte[]> downloadFile() {
		System.out.println("got here");
		String keyname = "thyme.png";
		ByteArrayOutputStream downloadInputStream = s3Services.downloadFile(keyname);
		System.out.println("got here2");
		return ResponseEntity.ok()
					.contentType(MediaType.IMAGE_PNG)
					.header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\"" + keyname + "\"")
					.body(downloadInputStream.toByteArray());	
	}
}


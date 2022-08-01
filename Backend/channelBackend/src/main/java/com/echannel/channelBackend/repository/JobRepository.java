package com.echannel.channelBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.echannel.channelBackend.model.JobDetails;


@Repository
public interface JobRepository extends JpaRepository<JobDetails,Integer> {

}

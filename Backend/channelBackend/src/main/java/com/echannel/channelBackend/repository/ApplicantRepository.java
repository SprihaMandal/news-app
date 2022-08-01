package com.echannel.channelBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.echannel.channelBackend.model.Applicant;

@Repository
public interface ApplicantRepository extends JpaRepository<Applicant,Long>{

}







package com.echannel.channelBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.echannel.channelBackend.model.Subsriber;

@Repository
public interface SubscriberRepository extends JpaRepository<Subsriber,Long>{

}
